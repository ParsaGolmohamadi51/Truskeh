import OrderCardWeb from "../../components/ui/OrderCardWeb";
import dark from "../../assets/images/order-img/Dark.png";
import classic from "../../assets/images/order-img/Classic.png";
import neoformis from "../../assets/images/order-img/Neoformis.png";
import henry from "../../assets/images/order-img/Henry.png";
import modern from "../../assets/images/order-img/Modern.png";
import matrial from "../../assets/images/order-img/Material.png";
import felt from "../../assets/images/order-img/Felt.png";
import minimal from "../../assets/images/order-img/Minimal.png";

const OrderWeb = () => {
  return (
    <>
      <div className="text-white">
        <OrderCardWeb plan="دارک مد" img={dark} />
        <OrderCardWeb plan="کلاسیک" img={classic} />
        <OrderCardWeb plan="نئوفورمیسم" img={neoformis} />
        <OrderCardWeb plan="هنری" img={henry} />
        <OrderCardWeb plan="مدرن" img={modern} />
        <OrderCardWeb plan="متریال" img={matrial} />
        <OrderCardWeb plan="فلت" img={felt} />
        <OrderCardWeb plan="مینیمال" img={minimal} />
      </div>
    </>
  );
};

export default OrderWeb;
