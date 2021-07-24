import React from "react";

function HomeTool() {
  return (
    <div className="homeTool">
      <div class="container">
        <div class="btn-group">
          <button type="button" class="btn " data-toggle="dropdown">
            Phim
          </button>
          <button
            type="button"
            class="btn dropdown-toggle dropdown-toggle-split"
            data-toggle="dropdown"
          ></button>
          <div class="dropdown-menu">
            {/* <a class="dropdown-item" href="#">
                Link 1
              </a>
              <a class="dropdown-item" href="#">
                Link 2
              </a> */}
          </div>
        </div>

        <div class="btn-group">
          <button type="button" class="btn " data-toggle="dropdown">
            Rạp
          </button>
          <button
            type="button"
            class="btn dropdown-toggle dropdown-toggle-split"
            data-toggle="dropdown"
          ></button>
          <div class="dropdown-menu">
            {/* <a class="dropdown-item" href="#">
                Link 1
              </a>
              <a class="dropdown-item" href="#">
                Link 2
              </a> */}
          </div>
        </div>
        <div class="btn-group">
          <button type="button" class="btn " data-toggle="dropdown">
            Ngày xem
          </button>
          <button
            type="button"
            class="btn dropdown-toggle dropdown-toggle-split"
            data-toggle="dropdown"
          ></button>
          <div class="dropdown-menu">
            {/* <a class="dropdown-item" href="#">
                Link 1
              </a>
              <a class="dropdown-item" href="#">
                Link 2
              </a> */}
          </div>
        </div>
        <div class="btn-group">
          <button type="button" class="btn " data-toggle="dropdown">
            Suất chiếu
          </button>
          <button
            type="button"
            class="btn dropdown-toggle dropdown-toggle-split"
            data-toggle="dropdown"
          ></button>
          <div class="dropdown-menu">
            {/* <a class="dropdown-item" href="#">
                Link 1
              </a>
              <a class="dropdown-item" href="#">
                Link 2
              </a> */}
          </div>
        </div>
        <div class="btn-group">
          <button type="button" class="btn " data-toggle="dropdown">
            Mua vé ngay
          </button>
          <button
            type="button"
            class="btn dropdown-toggle dropdown-toggle-split"
            data-toggle="dropdown"
          ></button>
          <div class="dropdown-menu">
            {/* <a class="dropdown-item" href="#">
                Link 1
              </a>
              <a class="dropdown-item" href="#">
                Link 2
              </a> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeTool;
