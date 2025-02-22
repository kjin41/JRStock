import { API_MEDIA_URL } from "../config";
import { nameDict, parameters, nameToId } from "../config/backtestConfig";

export const trimResultSummary = async ({
  basic_info,
  title,
  user,
  created_at,
  test_start_date,
  test_end_date,
  asset,
  final_asset,
  final_earn,
  final_rate,
  max_earn,
  min_earn,
  avg_day_earn_rate,
  avg_year_earn_rate,
  market_over_rate,
  mdd,
  trading_days,
  win_lose_rate,
  buy_standard,
  buy_ratio,
  sell_standard,
  sell_ratio,
}) => {
  if (final_asset) {
    return {
      resultSummary: {
        basicInfo: {
          created_at: created_at,
          title: title,
          user: user.name,
          profile: user.profile_img
            ? API_MEDIA_URL + user.profile_img
            : user.profile_img_url,
          company_name: basic_info.company_name,
          code_number: basic_info.code_number,
          min_earn: min_earn,
          max_earn: max_earn,
        },

        assetResult: [
          parseInt(asset).toLocaleString(),
          parseInt(final_earn).toLocaleString(),
          parseInt(final_asset).toLocaleString(),
          test_start_date,
          test_end_date,
          trading_days,
        ],
        profitResult: [
          final_rate,
          market_over_rate,
          win_lose_rate,
          avg_day_earn_rate,
          avg_year_earn_rate,
          mdd,
        ],
      },
      conditions: {
        buy_standard,
        buy_ratio,
        sell_standard,
        sell_ratio,
      },
    };
  }
  return {
    assetResult: [],
    profitResult: [],
  };
};

export const trimDaily = async (data) => {
  const lineChartData = [];
  const barChartData = [];

  await data.forEach(({ date, current_asset, day_earn }, index) => {
    lineChartData.push({ time: date, value: current_asset });

    const color =
      day_earn > 0 ? "#ef4444" : day_earn < 0 ? "#3b82f6" : "#d1d5db";
    barChartData.push({ time: date, value: day_earn, color });
  });

  return {
    lineChartData,
    barChartData,
  };
};

export const trimStockDaily = async (data) => {
  const trimmedStockData = [];
  const candleData = [];
  const candleVolumeData = [];

  await data.forEach(
    (
      {
        date,
        current_price,
        high_price,
        low_price,
        start_price,
        volume,
        changes,
      },
      index
    ) => {
      trimmedStockData.push({ time: date, value: parseInt(current_price) });
      candleData.push({
        time: date,
        open: start_price,
        close: current_price,
        low: low_price,
        high: high_price,
      });
      candleVolumeData.push({
        time: date,
        value: volume,
        color: parseFloat(changes) < 0 ? "#2563eb" : "#ef4444",
      });
    }
  );

  return {
    candleData,
    trimmedStockData,
    candleVolumeData,
  };
};

export const trimAnnually = async (data) => {
  const labels = [];
  const marketData = [];
  const backtestData = [];

  await data.forEach(({ year, year_rate, market_rate }, index) => {
    labels.push(year);
    marketData.push(market_rate);
    backtestData.push(year_rate);
  });

  return {
    labels,
    marketData,
    backtestData,
  };
};

export const trimRecords = async (data) => {
  const records = {};
  const markers = [];
  await data.forEach(
    (
      { date, buy_sell_option, isBuy, isWin, stock_amount, stock_price },
      index
    ) => {
      records[`${date}`] = {
        buy_sell_option,
        isBuy,
        isWin,
        stock_amount,
        stock_price,
      };

      const win = isWin ? "sell 승" : "sell 패";
      markers.push({
        time: date,
        position: isBuy ? "belowBar" : "aboveBar",
        color: isBuy ? "#18216d" : isWin ? "#ef4444" : "#3b82f6",
        shape: isBuy ? "arrowUp" : "arrowDown",
        text: isBuy ? `buy` : win,
      });
    }
  );

  return { records, markers };
};

export const trimStrategy = async (data) => {
  const buyStrategy = [];
  const sellStrategy = [];

  await data.forEach(({ buy_sell_option, isBuy, params, weight }, index) => {
    const paramValue = params.split(" ");
    const paramObj = {};
    const paramIds = parameters[nameToId[buy_sell_option]];
    paramIds.forEach((id, index) => {
      paramObj[id] = paramValue[index];
    });
    const strategy = nameDict[buy_sell_option].split(" ");
    const condition = {
      strategyId: nameToId[buy_sell_option],
      strategy: strategy[0],
      strategyDetail: strategy[1],
      params: paramObj,
      weight: weight,
    };

    if (isBuy) {
      buyStrategy.push(condition);
    } else {
      sellStrategy.push(condition);
    }
  });

  return {
    buyStrategy,
    sellStrategy,
  };
};
