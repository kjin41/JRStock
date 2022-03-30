import styles from "./list.module.css";
import RankItem from "./RankItem";
import ListTitle from "./ListTitle";

export function RankingTable({ data }) {
  const rankList = () => {
    const list = [];
    data.forEach((el, idx) => {
      list.push(<RankItem item={el} index={idx} key={idx} />);
    });
    return list;
  };

  return (
    <table className={styles.table}>
      <colgroup>
        <col span="1" style={{ width: 8 + "%" }} />
        <col span="1" style={{ width: 8 + "%" }} />
        <col span="1" style={{ width: 15 + "%" }} />
        <col span="1" style={{ width: 10 + "%" }} />
        <col span="1" style={{ width: 15 + "%" }} />
        <col span="1" style={{ width: 15 + "%" }} />
        <col span="1" style={{ width: 15 + "%" }} />
        <col span="1" style={{ width: 10 + "%" }} />
      </colgroup>
      <ListTitle
        titles={[
          "순위",
          "프로필",
          "이름",
          "수익율",
          "투자원금",
          "총 손익",
          "최종 자산",
          "매매일수",
        ]}
      />
      <tbody>{data && rankList()}</tbody>
    </table>
  );
}
