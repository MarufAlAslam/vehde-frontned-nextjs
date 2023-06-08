import Image from "next/image";
import React, { useEffect, useState } from "react";
import DashboardLayout from "../../components/layout/DashboardLayout";
import styles from "../../styles/dashboard/MyHost.module.css";

import BankIcon from "../../assets/img/dashboard/MyHost/BankIcon.png";
import CreditCardIcon from "../../assets/img/dashboard/MyHost/credit-card.png";
import PaypalIcon from "../../assets/img/dashboard/MyHost/paypal.png";
import CheckMarkIcon from "../../assets/img/dashboard/MyHost/checkmark.png";

import ModalLg from "../../components/common/ModalLg";
import RentalEmptyData from "../../components/Rental/RentalEmptyData";
import RentalDataList from "../../components/Rental/RentalDataList";

const MyHost = () => {
  const [setupPaymentMethod, setSetupPaymentMethod] = useState(null);
  const [modalLg, setModalLg] = useState(null);
  const [modalLgData, setModalLgData] = useState("empty");

  const [listings, setListings] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/host/listing", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setListings(data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    const isFirstTimeHost = localStorage.getItem("isFirstTimeHost");
    isFirstTimeHost === "true"
      ? setSetupPaymentMethod("normal")
      : setSetupPaymentMethod(null);
  }, []);

  const deleteCar = (id) => {
    fetch(`http://localhost:5000/host/listing`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    })
      .then((res) => res.json())
      .then((data) => {
        const newListings = listings.filter((listing) => listing._id !== id);
        setListings(newListings);
      })
      .catch((err) => console.log(err));
  };

  return (
    <DashboardLayout>
      <div className={styles.container}>
        {setupPaymentMethod === null && (
          <>
            <div className={styles.setupPaymentMethod}>
              <div>
                <h2>Establishing host payment method</h2>
                <h3>
                  <span>Thank you</span> for choosing VEHDE.
                </h3>
                <h4>
                  How do you want to be paid? Please provide your preferred
                  payment method below.
                </h4>
                <p>
                  Select one of the acceptable methods to receive your payments
                </p>
              </div>
            </div>
            <div className={styles.paymentGetway}>
              <div>
                <input type="radio" name="paymentMethod" id="bank" hidden />
                <label htmlFor="bank">
                  <Image src={BankIcon} alt="" />
                  <span>Bank account</span>
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  name="paymentMethod"
                  id="creditCard"
                  hidden
                />
                <label htmlFor="creditCard">
                  <Image src={CreditCardIcon} alt="" />
                  <span>Credit and debit cards</span>
                </label>
              </div>
              <div>
                <input type="radio" name="paymentMethod" id="paypal" hidden />
                <label htmlFor="paypal">
                  <Image src={PaypalIcon} alt="" />
                  <span>PayPal</span>
                </label>
              </div>
            </div>
            <div className={styles.paymentGetwayBottom}>
              <h2>How and when will I get paid?</h2>
              <p>
                <span>NOTE:</span> VEHDE charges a flat-rate service fee of
                13.5%* of the rental price. This fee allows VEHDE to operate our
                business.
              </p>
              <button
                className="my-btn w-100"
                onClick={() => setSetupPaymentMethod("First Thank You")}
              >
                Next
              </button>
            </div>
          </>
        )}
        {setupPaymentMethod === "First Thank You" && (
          <>
            <div className={styles.firstThankYouContainer}>
              <h3>Establishing host payment method</h3>
              <h1>Thank You</h1>
              <Image src={CheckMarkIcon} alt="" />
              <h4>
                For confirming your payment method for your VEHDE Host account.
              </h4>
              {setTimeout(() => {
                setSetupPaymentMethod("Thank You");
              }, 2000)}
            </div>
          </>
        )}
        {setupPaymentMethod === "Thank You" && (
          <>
            <div className={styles.thankYou}>
              <h1>Thank You</h1>
              <h4>
                Please proceed to your personalized inbox to track the status of
                your application and view customized host’s information from
                VEHDE.
              </h4>
              <div>
                <button
                  className="my-btn w-100"
                  onClick={() => {
                    setSetupPaymentMethod("normal");
                    localStorage.setItem("isFirstTimeHost", true);
                  }}
                >
                  Proceed to my inbox
                </button>
              </div>
            </div>
          </>
        )}
        {setupPaymentMethod === "normal" && (
          <>
            <div className={styles.wrapper}>
              <div>
                <h2>My host with VEHDE</h2>
              </div>
              <table style={{ width: "80%", textAlign: "center" }}>
                <thead>
                  <tr>
                    <th
                      style={{
                        borderBottom: "1px solid black",
                        paddingBottom: "15px",
                      }}
                    >
                      make
                    </th>
                    <th
                      style={{
                        borderBottom: "1px solid black",
                        paddingBottom: "15px",
                      }}
                    >
                      model
                    </th>
                    <th
                      style={{
                        borderBottom: "1px solid black",
                        paddingBottom: "15px",
                      }}
                    >
                      type
                    </th>
                    <th
                      style={{
                        borderBottom: "1px solid black",
                        paddingBottom: "15px",
                      }}
                    >
                      manufactured
                    </th>
                    <th
                      style={{
                        borderBottom: "1px solid black",
                        paddingBottom: "15px",
                      }}
                    >
                      city
                    </th>
                    <th
                      style={{
                        borderBottom: "1px solid black",
                        paddingBottom: "15px",
                      }}
                    >
                      rent/day
                    </th>
                    <th
                      style={{
                        borderBottom: "1px solid black",
                        paddingBottom: "15px",
                      }}
                    >
                      rent/hour
                    </th>
                    <th
                      style={{
                        borderBottom: "1px solid black",
                        paddingBottom: "15px",
                      }}
                    >
                      discount
                    </th>
                    <th
                      style={{
                        borderBottom: "1px solid black",
                        paddingBottom: "15px",
                      }}
                    >
                      action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {listings.map((listing) => (
                    <tr key={listing._id}>
                      <td className="my-3" style={{ margin: "20px 0" }}>
                        {listing.make}
                      </td>
                      <td className="my-3" style={{ margin: "20px 0" }}>
                        {listing.model}
                      </td>
                      <td className="my-3" style={{ margin: "20px 0" }}>
                        {listing.type}
                      </td>
                      <td className="my-3" style={{ margin: "20px 0" }}>
                        {listing.year}
                      </td>
                      <td className="my-3" style={{ margin: "20px 0" }}>
                        {listing.city}
                      </td>
                      <td className="my-3" style={{ margin: "20px 0" }}>
                        {listing.rentperday}
                      </td>
                      <td className="my-3" style={{ margin: "20px 0" }}>
                        {listing.rentperhour}
                      </td>
                      <td className="my-3" style={{ margin: "20px 0" }}>
                        {listing.discount}
                      </td>
                      <td className="my-3" style={{ margin: "20px 0" }}>
                        <button
                          className="my-btn mx-auto"
                          style={{ marginTop: "20px" }}
                          onClick={() => deleteCar(listing._id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
        {modalLg === "rental" && (
          <>
            <ModalLg setModal={setModalLg}>
              <div className={styles.rentalDataWrapper}>
                {modalLgData === "empty" && (
                  <RentalEmptyData setModalLgData={setModalLgData} />
                )}
                {modalLgData === "list" && <RentalDataList />}
              </div>
            </ModalLg>
          </>
        )}
      </div>
    </DashboardLayout>
  );
};

export default MyHost;
