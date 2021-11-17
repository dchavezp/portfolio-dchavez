import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Loading from "../Loading";
import LandingPage from "../Landing";
function Main() {
  const [isLoaded, setLoading] = useState(false);
  return (
    <AnimatePresence>
      {isLoaded ? <LandingPage /> : <Loading onEndCharge={setLoading} />}
    </AnimatePresence>
  );
}

export default Main;
