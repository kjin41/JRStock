import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getBoardDetail, deleteBoard, getCommentList } from "../../api/stock";
import { userDetail } from "../../api/user";
import PageContainer from "../PageContainer";

export default function BoardDetail() {
  const { id, boardId } = useParams();
  const [board, setBoard] = useState();
  const [comment, setComment] = useState();
  const [user, setUser] = useState();
  const [pageNo, setPageNo] = useState(1);
  const navigate = useNavigate();
  const pageSize = 1;
  const isLogin = !sessionStorage.getItem("access_token") ? false : true;

  const init = async () => {
    const boardData = await getBoardDetail(boardId);
    if (isLogin) {
      const userData = await userDetail();
      setUser(userData);
    }
    setBoard(boardData.data);

    const commentData = await getCommentList(boardId, pageNo, pageSize);
    setComment(commentData.data);
  };

  useEffect(() => {
    init();
  }, []);

  // 게시글 삭제
  const clickDeleteBoard = async () => {
    await deleteBoard(boardId);
    navigate(`/stock/${id}/board`);
  };

  // 게시글 수정
  const goBoardUpdate = () => {
    navigate(`update`);
  };

  // 로그인 페이지로
  const goLogin = () => {
    if (!isLogin) {
      if (window.confirm("댓글을 작성하려면 로그인해야합니다.")) {
        navigate("/login", {
          state: { from: { pathname: `/stock/${id}/board/${boardId}` } },
        });
      }
    }
  };

  return (
    <PageContainer>
      <div className="p-10 grid grid-cols-12">
        <div className="col-start-3 col-end-11">
          <div className="flex justify-between items-end">
            <h1 className="text-4xl font-bold">{board?.title}</h1>
            {user && user?.id === board?.user.id && (
              <div>
                <button
                  className="mr-10 pl-2 pr-1 pt-1 pb-1.5 rounded-md bg-indigo-700 fill-white"
                  onClick={goBoardUpdate}
                >
                  <svg
                    enableBackground="new 0 0 64 64"
                    id="Layer_1"
                    version="1.1"
                    viewBox="0 0 64 64"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-7"
                  >
                    <g>
                      <path d="M55.736,13.636l-4.368-4.362c-0.451-0.451-1.044-0.677-1.636-0.677c-0.592,0-1.184,0.225-1.635,0.676l-3.494,3.484   l7.639,7.626l3.494-3.483C56.639,15.998,56.639,14.535,55.736,13.636z" />
                      <polygon points="21.922,35.396 29.562,43.023 50.607,22.017 42.967,14.39  " />
                      <polygon points="20.273,37.028 18.642,46.28 27.913,44.654  " />
                      <path d="M41.393,50.403H12.587V21.597h20.329l5.01-5H10.82c-1.779,0-3.234,1.455-3.234,3.234v32.339   c0,1.779,1.455,3.234,3.234,3.234h32.339c1.779,0,3.234-1.455,3.234-3.234V29.049l-5,4.991V50.403z" />
                    </g>
                  </svg>
                </button>
                <button
                  className="px-1.5 pt-1 pb-1.5 rounded-md bg-red-600 fill-white"
                  onClick={clickDeleteBoard}
                >
                  <svg
                    id="Layer_1"
                    version="1.1"
                    viewBox="0 0 512 512"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-7"
                  >
                    <path d="M341,128V99c0-19.1-14.5-35-34.5-35H205.4C185.5,64,171,79.9,171,99v29H80v32h9.2c0,0,5.4,0.6,8.2,3.4c2.8,2.8,3.9,9,3.9,9  l19,241.7c1.5,29.4,1.5,33.9,36,33.9h199.4c34.5,0,34.5-4.4,36-33.8l19-241.6c0,0,1.1-6.3,3.9-9.1c2.8-2.8,8.2-3.4,8.2-3.4h9.2v-32  h-91V128z M192,99c0-9.6,7.8-15,17.7-15h91.7c9.9,0,18.6,5.5,18.6,15v29H192V99z M183.5,384l-10.3-192h20.3L204,384H183.5z   M267.1,384h-22V192h22V384z M328.7,384h-20.4l10.5-192h20.3L328.7,384z" />
                  </svg>
                </button>
              </div>
            )}
          </div>
          <div className="border-b-2 pb-3 mt-10 text-gray-400 text-lg flex justify-between">
            <p>작성자 : {board?.user.name}</p>
            <p>
              {board?.created_at.substring(0, 10)}{" "}
              {board?.created_at.substring(11, 19)}
            </p>
          </div>
          <div className="text-xl py-10 px-5">{board?.content}</div>
          <div className="text-2xl font-bold mt-28">
            댓글 {!!comment?.count && comment.count}
          </div>
          <form
            className="mt-3"
            onSubmit={function (e) {
              e.preventDefault();
            }}
          >
            <textarea
              name=""
              id=""
              rows="3"
              placeholder={
                !isLogin
                  ? "댓글을 작성하려면 로그인 해주세요."
                  : "댓글을 작성해주세요."
              }
              onClick={goLogin}
              className={
                "w-full rounded-lg border-indigo-800 ring-indigo-800 focus:border-indigo-300 focus:ring-indigo-300" +
                (!isLogin ? " cursor-pointer" : "")
              }
            ></textarea>
            {isLogin && (
              <div className="flex justify-end">
                <button className="mt-1 border px-5 rounded-md bg-indigo-500 text-white hover:bg-indigo-800 py-2 col-start-5 col-span-1">
                  작성
                </button>
              </div>
            )}
          </form>
          <div className="mt-10">{comment?.results}</div>
          <button
            className="block m-auto rounded-xl border-2 w-32 h-12 bg-indigo-100 text-xl font-bold text-indigo-500 border-indigo-800 bottom-5"
            onClick={(e) => {
              e.preventDefault();
              navigate(`/stock/${id}/board`);
            }}
          >
            목록
          </button>
        </div>
      </div>
    </PageContainer>
  );
}
