import React from "react";
import { Redirect, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../utils/queries";
import Auth from "../utils/auth";
import CardsGrid from "./CardsGrid";
import { Link } from "react-router-dom";

const Profile = () => {
  const { loading, data } = useQuery(QUERY_USER);
  const user = data?.profile || {};
  console.log(user);
  // redirect to personal profile page if username is yours
//   if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
//     return <Redirect to="/MyRecipesPage" />;
//   }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="flex-row justify-center mb-3">
        <h2 className="col-12 col-md-10 bg-dark text-light p-3 mb-5">
          Viewing {user ? `${user.userName}'s` : "your"} profile.
          <Link to="/CardsGrid data={user.authored}" />
        </h2>

        <div className="col-12 col-md-10 mb-5">
          {user ? <CardsGrid data={user.authored} /> : <p>No data yet.</p>}
        </div>
      </div>
    </div>
  );
};

export default Profile;
