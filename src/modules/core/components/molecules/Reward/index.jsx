import './styles.scss';
import React from 'react';
import Swal from 'sweetalert2'
export default function Reward() {
  const alerta = ()=> Swal.fire('Hey, this is not ready yet, come back later')
  return (
    <div className="mvl-reward-content">
      <div className="mvl-reward-content-image">
        <img src="https://i.postimg.cc/7PKWqdrZ/marvel-insider-master.jpg" alt="" />
      </div>
      <div className="mvl-reward-content-text">
        <h6 className="mvl-reward-title">MARVEL INSIDER</h6>
        <h4>Whatch, Earn, Redeem!</h4>
        <p>Get rewarded for doing what you already do as a fan.</p>
        <button className="mvl-reward button-red" onClick={alerta}>JOIN NOW</button>
        <p className="mvl-reward-conditions">Terms and Conditions Apply</p>
      </div>
    </div>
  );
}
