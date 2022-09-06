import styled from "styled-components";

const Container = styled.div`
  display: flex;
  height: 5.5rem;
  width: 100%;
  background-color: var(--color-primary);
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1100px;
    margin: 0 auto;
    /* padding: 1rem 2rem; */
    img {
      width: 8rem;
    }
    .dropdown {
      position: relative;
      display: inline-block;
      .dropbtn {
        background-color: var(--color-primary);
        color: white;
        padding: 16px;
        font-size: 16px;
        border: none;
        cursor: pointer;
      }
      .triangle {
        position: absolute;
        right: 74px;
        top: 21px;
        width: 0;
        height: 0;
        border-left: 8px solid transparent;
        border-right: 8px solid transparent;
        border-top: 10px solid var(--grey-0);
      }
    }
    .dropdown-content {
      display: none;
      position: absolute;
      top: 45px;
      right: 5px;
      border-radius: 10px;
      background-color: #f9f9f9;
      height: 4rem;
      width: 13.313rem;
      box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
      z-index: 1;
      .logout {
        color: black;
        padding: 12px 16px;
        margin: 10px;
        text-decoration: none;
        display: block;
        span {
          margin-left: 7px;
        }
      }
    }
    .dropdown-content .logout:hover {
      border-radius: 10px;
      color: var(--grey-0);
      background-color: var(--grey-4);
    }
    .dropdown:hover .dropdown-content {
      display: block;
    }
  }
`;

export default Container;
