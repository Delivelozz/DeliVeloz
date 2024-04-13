import React from "react";
import { useState, useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getShoppingCart } from "../redux/actions/actions";

export const useGetShoppingDB = () => {
  const user = useSelector((state) => state.user);
  const shoppingCartDB = useSelector((state) => state.shoppingCartDB);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getShoppingCart(user?.user?.id));
  }, [user, shoppingCartDB]);
};
