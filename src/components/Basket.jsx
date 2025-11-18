import { CiCircleMinus } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";

const Basket = ({ basket, setBasket }) => {
  let subtotal = 0;
  basket.map((element) => {
    subtotal += Number(element.price) * element.quantity;
  });
  let grandTotal = Number(subtotal) + 2.5;
  subtotal = subtotal.toLocaleString("fr-FR", { minimumFractionDigits: 2 });
  grandTotal = grandTotal.toLocaleString("fr-FR", { minimumFractionDigits: 2 });

  return (
    <aside>
      <article className="basket">
        <button>Valider mon panier</button>
        {basket.map((element, index) => (
          <section className="basket-item" key={index}>
            <div className="item-counter">
              <button
                onClick={() => {
                  const newBasket = [...basket];
                  newBasket[index].quantity--;
                  if (newBasket[index].quantity <= 0) {
                    newBasket.splice(index, 1);
                  }
                  setBasket(newBasket);
                }}
              >
                <CiCircleMinus />
              </button>
              <p className="item-quantity">{element.quantity}</p>
              <button
                onClick={() => {
                  const newBasket = [...basket];
                  newBasket[index].quantity++;
                  setBasket(newBasket);
                }}
              >
                <CiCirclePlus />
              </button>
            </div>
            <p className="item-designation">{element.title}</p>
            <p className="item-price">
              {Number(element.price).toLocaleString("fr-FR", {
                minimumFractionDigits: 2,
              })}{" "}
              €
            </p>
          </section>
        ))}
        <hr />
        <section className="subtotal">
          <p>Sous-total</p>
          <p>{subtotal} €</p>
        </section>
        <section className="delivery-fee">
          <p>Frais de livraison</p>
          <p>2,50 €</p>
        </section>
        <hr />
        <section className="total">
          <p>Total</p>
          <p>{grandTotal} €</p>
        </section>
      </article>
    </aside>
  );
};

export default Basket;
