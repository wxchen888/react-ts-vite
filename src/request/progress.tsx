import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import React from "react";

const RouteGuard = () => {
  const location = useLocation();
  const startProgress = () => {
    NProgress.start();
  };

  const stopProgress = () => {
    NProgress.done();
  };

  useEffect(() => {
    startProgress();
    return () => {
      stopProgress();
    };
  }, [location]);

  return <React.Fragment></React.Fragment>;
};

export default RouteGuard;
