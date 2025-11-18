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

  const isEmpty = basket.length === 0;

  return (
    <aside>
      <article className="basket">
        <button className={isEmpty && "empty-button"}>
          Valider mon panier
        </button>
        {isEmpty ? (
          <p className="empty-basket-notif">Votre panier est vide</p>
        ) : (
          <>
            {basket.map((element, index) => (
              <section className="basket-item" key={index}>
                <div className="basket-item-left">
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
                </div>
                <p className="item-price">
                  {Number(element.price * element.quantity).toLocaleString(
                    "fr-FR",
                    {
                      minimumFractionDigits: 2,
                    }
                  )}{" "}
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
          </>
        )}
      </article>
    </aside>
  );
};

export default Basket;
