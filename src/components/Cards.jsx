import React from "react";
import "./Card.css";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Cards = () => {
  return (
    <div className="container">
      <h1 className="title">Fade</h1>

      <div className="card-left card">
        <div className="box" data-aos="fade-up">
          <h1>Box - 1</h1>
        </div>
      </div>

      <div className="card-right card">
        <div className="box" data-aos="fade-down">
          <h1>Box - 2</h1>
        </div>
      </div>

      <div className="card-left card">
        <div className="box" data-aos="fade-right">
          <h1>Box - 3</h1>
        </div>
      </div>

      <div className="card-right card">
        <div className="box" data-aos="fade-left">
          <h1>Box - 4</h1>
        </div>
      </div>

      <div className="card-left card">
        <div className="box" data-aos="fade-up-right">
          <h1>Box - 5</h1>
        </div>
      </div>

      <div className="card-right card">
        <div className="box" data-aos="fade-up-left">
          <h1>Box - 6</h1>
        </div>
      </div>

      <div className="card-left card">
        <div className="box" data-aos="fade-down-right">
          <h1>Box - 7</h1>
        </div>
      </div>

      <div className="card-right card">
        <div className="box" data-aos="fade-down-left">
          <h1>Box - 8</h1>
        </div>
      </div>

      <h1 className="title">Flip</h1>

      <div className="card-left card">
        <div className="box" data-aos="flip-left">
          <h1>Box - 9</h1>
        </div>
      </div>

      <div className="card-right card">
        <div className="box" data-aos="flip-right">
          <h1>Box - 10</h1>
        </div>
      </div>

      <div className="card-left card">
        <div className="box" data-aos="flip-up">
          <h1>Box - 11</h1>
        </div>
      </div>

      <div className="card-right card">
        <div className="box" data-aos="flip-down">
          <h1>Box - 12</h1>
        </div>
      </div>

      <h1 className="title">Zoom</h1>

      <div className="card-left card">
        <div className="box" data-aos="zoom-in">
          <h1>Box - 13</h1>
        </div>
      </div>

      <div className="card-right card">
        <div className="box" data-aos="zoom-in-up">
          <h1>Box - 14</h1>
        </div>
      </div>

      <div className="card-left card">
        <div className="box" data-aos="zoom-in-down">
          <h1>Box - 15</h1>
        </div>
      </div>

      <div className="card-right card">
        <div className="box" data-aos="zoom-in-left">
          <h1>Box - 16</h1>
        </div>
      </div>

      <div className="card-left card">
        <div className="box" data-aos="zoom-in-right">
          <h1>Box - 17</h1>
        </div>
      </div>

      <div className="card-right card">
        <div className="box" data-aos="zoom-out">
          <h1>Box - 18</h1>
        </div>
      </div>

      <div className="card-left card">
        <div className="box" data-aos="zoom-out-up">
          <h1>Box - 19</h1>
        </div>
      </div>

      <div className="card-right card">
        <div className="box" data-aos="zoom-out-down">
          <h1>Box - 20</h1>
        </div>
      </div>

      <div className="card-left card">
        <div className="box" data-aos="zoom-out-right">
          <h1>Box - 21</h1>
        </div>
      </div>

      <div className="card-right card">
        <div className="box" data-aos="zoom-out-left">
          <h1>Box - 22</h1>
        </div>
      </div>

      <h1 className="title">Different Setting Examples</h1>

      <div className="card-left card">
        <div className="box" data-aos="fade-up" data-aos-duration="3000">
          <h1>Box - 23</h1>
        </div>
      </div>

      <div className="card-right card">
        <div
          className="box"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <h1>Box - 24</h1>
        </div>
      </div>

      <div className="card-left card">
        <div
          className="box"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <h1>Box - 25</h1>
        </div>
      </div>

      <div className="card-right card">
        <div
          className="box"
          data-aos="fade-left"
          data-aos-anchor="#example-anchor"
          data-aos-offset="500"
          data-aos-duration="500"
        >
          <h1>Box - 26</h1>
        </div>
      </div>
      <div className="card-left card">
        <div
          className="box"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="300"
          data-aos-offset="0"
        >
          <h1>Box - 27</h1>
        </div>
      </div>

      <div className="card-right card">
        <div
          className="box"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <h1>Box - 28</h1>
        </div>
      </div>

      <h1 className="title">Anchor Placement</h1>

      <div className="card-left card">
        <div
          className="box"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
        >
          <h1>Box - 29</h1>
        </div>
      </div>

      <div className="card-right card">
        <div
          className="box"
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
        >
          <h1>Box - 30</h1>
        </div>
      </div>
      <div className="card-left card">
        <div
          className="box"
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
        >
          <h1>Box - 31</h1>
        </div>
      </div>

      <div className="card-right card">
        <div
          className="box"
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
        >
          <h1>Box - 32</h1>
        </div>
      </div>
      <div className="card-left card">
        <div
          className="box"
          data-aos="fade-up"
          data-aos-anchor-placement="center-center"
        >
          <h1>Box - 33</h1>
        </div>
      </div>

      <div className="card-right card">
        <div
          className="box"
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-center"
        >
          <h1>Box - 34</h1>
        </div>
      </div>
    </div>
  );
};

export default Cards;
