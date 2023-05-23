import Navbar from "../components/Navbar";
import { SafeAreaView } from "react-native-safe-area-context";
import ProductListMain from "../components/ProductListMain";
import { useEffect } from "react";

export default function ProductList() {
  useEffect(() => {
    console.log("LIST MOUNTED");
  }, []);
  return (
    <SafeAreaView style={{ flex: 1, width: "100%" }}>
      <Navbar />
      <ProductListMain title="All Product" />
    </SafeAreaView>
  );
}
