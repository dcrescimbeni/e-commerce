import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import SubNavBar from "../components/SubNavBar";
import { CgProfile } from "react-icons/cg";
import style from "../styles/Profile.module.css"


const Profile = () => {
  let { firstName } = useParams();

  console.log("Params =>", firstName);

  const user = useSelector((state) => {
    console.log(state.user);
    return state.user;
  });

  return (
    <div>
      <SubNavBar />
      <div className={style.Profile} id="edit-template">
        <div className="main-section">
          <div className="side-nav db-sm">
            <div id="user-short">
              <div className="fx-c">
                <div>
                  {" "}
                  <CgProfile size={25} />
                </div>
                <hgroup class="tooltip-container">
                  <h2>{user.firstName}</h2>
                  <span class="tooltip tooltip-neutral bottom">
                    <span class="tooltip-inner">{user.firstName}</span>
                  </span>
                  <h3></h3>
                </hgroup>
              </div>
              <ul class="unstyled-list">
                <li class="">
                  <a href="/user/pamela-bueno-2/" data-purpose="">
                    View public profile
                  </a>
                </li>
                <li class=" on ">
                  <a
                    href="/user/edit-profile/"
                    data-purpose="user_manage:edit-profile"
                  >
                    Profile
                  </a>
                </li>
                <li class="">
                  <a
                    href="/user/edit-photo/"
                    data-purpose="user_manage:edit-photo"
                  >
                    Photo
                  </a>
                </li>
                <li class="">
                  <a
                    href="/user/edit-account/"
                    data-purpose="user_manage:edit-account"
                  >
                    Account
                  </a>
                </li>
                <li class="">
                  <a
                    href="/user/edit-payment-methods/"
                    data-purpose="user_manage:edit-payment-methods"
                  >
                    Payment methods
                  </a>
                </li>
                <li class="">
                  <a
                    href="/user/edit-privacy/"
                    data-purpose="user_manage:edit-privacy"
                  >
                    Privacy
                  </a>
                </li>
                <li class="">
                  <a
                    href="/user/edit-notifications/"
                    data-purpose="user_manage:edit-notifications"
                  >
                    Notifications
                  </a>
                </li>
                <li class="">
                  <a
                    href="/user/edit-api-clients/"
                    data-purpose="user_manage:edit-api-clients"
                  >
                    API clients
                  </a>
                </li>
                <li class="">
                  <a
                    href="/user/close-account/"
                    data-purpose="user_manage:close-account"
                  >
                    Close account
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="form-wrapper">
        <h2>Public profile</h2>
        <h3>Add information about yourself</h3>
     
        <form action="http://localhost3001/user/edit-profile" method="post">
            
            <div className="manage-fields-wrapper sectioned">
            <div className="form-field-container  labeled form-section labeled--sr-only" id="form-item-name">
            <label className="udheavy-form-label control-label " for="id_name">Name</label>
            <div id="tooltip-reference-name" className="tooltip-reference pos-r ">
                <input type="text" name="name" value="" maxlength="64" placeholder="First Name" className="textinput textInput form-control"/>
            </div>
            </div>
            <div className="form-field-container  labeled form-section labeled--sr-only" id="form-item-name">
            <label className="udheavy-form-label control-label " for="id_name">Last Name</label>
            <div id="tooltip-reference-name" className="tooltip-reference pos-r ">
                <input type="text" name="name" value="" maxlength="64" placeholder="Last Name" className="textinput textInput form-control"/>
            </div>
            </div>
            <div className="form-field-container  labeled form-section labeled--sr-only" id="form-item-name">
            <label className="udheavy-form-label control-label " for="id_name">Address</label>
            <div id="tooltip-reference-name" className="tooltip-reference pos-r ">
                <input type="text" name="name" value="" maxlength="64" placeholder="First Name" className="textinput textInput form-control"/>
            </div>
            </div>
            <div className="form-field-container  labeled form-section labeled--sr-only" id="form-item-name">
            <label className="udheavy-form-label control-label " for="id_name">Name</label>
            <div id="tooltip-reference-name" className="tooltip-reference pos-r ">
                <input type="text" name="name" value="" maxlength="64" placeholder="First Name" className="textinput textInput form-control"/>
            </div>
            </div>
            </div>
            <div className="form-actions"> 
            <div className="submit-row"> 
            <input type="submit" name="submit" value="Save" className="btn btn-primary " />
</div>
</div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
