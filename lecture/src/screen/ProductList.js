import Navbar from "../components/Navbar";
import { SafeAreaView } from "react-native-safe-area-context";
import ProductListMain from "../components/ProductListMain";

export default function ProductList() {
  return (
    <SafeAreaView style={{ flex: 1, width: "100%" }}>
      <Navbar />
      <ProductListMain title="All Product" />
    </SafeAreaView>
  );
}
