/*
 * Copyright Intern MSIB6 @ PT Len Industri (Persero)
 *
 * THIS SOFTWARE SOURCE CODE AND ANY EXECUTABLE DERIVED THEREOF ARE PROPRIETARY
 * TO PT LEN INDUSTRI (PERSERO), AS APPLICABLE, AND SHALL NOT BE USED IN ANY WAY
 * OTHER THAN BEFOREHAND AGREED ON BY PT LEN INDUSTRI (PERSERO), NOR BE REPRODUCED
 * OR DISCLOSED TO THIRD PARTIES WITHOUT PRIOR WRITTEN AUTHORIZATION BY
 * PT LEN INDUSTRI (PERSERO), AS APPLICABLE.
 *
 * Created Date: Tuesday, March 19th 2024, 9:22:28 am
 * Author: Wesly | agustchannel@gmail.com <https://github.com/agus-wesly>
 *
 */

import { useSearchParams } from "react-router-dom";

export const useGetProductFromURL = () => {
  const [searchParams] = useSearchParams();

  let products;

  try {
    products = JSON.parse(searchParams.get("items"));
  } catch (e) {
    products = [];
  }

  return {
    products,
  };
};
