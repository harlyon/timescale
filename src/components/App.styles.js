import styled from "styled-components";

export const StyledSpinner = styled.div`
  .spinner {
    width: 40px;
    height: 40px;

    position: relative;
    margin: 100px auto;
  }

  .double-bounce1,
  .double-bounce2 {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #333;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;

    -webkit-animation: sk-bounce 2s infinite ease-in-out;
    animation: sk-bounce 2s infinite ease-in-out;
  }

  .double-bounce2 {
    -webkit-animation-delay: -1s;
    animation-delay: -1s;
  }

  @-webkit-keyframes sk-bounce {
    0%,
    100% {
      -webkit-transform: scale(0);
    }
    50% {
      -webkit-transform: scale(1);
    }
  }

  @keyframes sk-bounce {
    0%,
    100% {
      transform: scale(0);
      -webkit-transform: scale(0);
    }
    50% {
      transform: scale(1);
      -webkit-transform: scale(1);
    }
  }
`;

export const Styled = styled.div`
  .container {
    background-color: white;
    width: 90%;
    margin: 20px auto;
    font-family: "Noto Sans", sans-serif;
  }

  .nav-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid #e0e0e0;
    padding-bottom: 6px;

    & .search-box {
      height: 32px;
      width: 230px;
      border: 2px solid #e0e0e0;
      border-radius: 5px;
    }
  }

  .content {
    & .header {
      margin-top: 20px;
      font-size: 26px;
      font-weight: bold;
    }
  }

  .loading {
    text-align: center;
    font-size: 48px;
    margin: 30% auto;
  }

  .grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 20px;
    margin: 20px auto;

    & .grid-card {
      &:hover {
        cursor: pointer;
      }
    }
  }

  @media only screen and (max-width: 1024px) {
    .grid-container {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }

  @media only screen and (max-width: 768px) {
    .grid-container {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media only screen and (max-width: 480px) {
    .nav-bar {
      & .logo {
        width: 90%;
      }
      & .search-box {
        width: 180px;
      }
    }

    .grid-container {
      grid-template-columns: 1fr;
    }
  }

  @media only screen and (max-width: 330px) {
    .nav-bar {
      & .logo {
        width: 80%;
      }

      & .search-box {
        width: 120px;
        height: 28px;
      }
    }

    .grid-container {
      grid-template-columns: 1fr;
    }
  }
`;

export const StyledMovies = styled.div`
  .container {
    margin: auto auto;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    border: 1px solid #e0e0e0;
    border-radius: 10px;
    box-shadow: 3px 3px 3px #e0e0e0;

    position: relative;

    & .movie-poster {
      height: 100%;
      width: 100%;
      border-radius: 10px 10px 0 0;
      objectfit: fill;
    }
  }

  .movie-rating {
    position: absolute;
    top: 20px;
    left: 20px;
    border: 1px solid #000000;
    border-radius: 50px;
    text-align: center;
    font-size: 12px;
    padding: 5px;
    background-color: white;
  }

  .movie-title {
    font-size: 13px;
    text-align: center;
    margin: 10px auto;
    color: #424242;
  }

  @media only screen and (max-width: 330px) {
    .container {
      & .movie-poster {
        width: 228px;
      }
    }
  }
`;

export const StyledMovieModal = styled.div`
  .modal-container {
    display: ${(props) => (props.isModalOpen ? "block" : "none")};
    position: fixed;
    z-index: 999;
    padding-top: 180px;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0, 0, 0);
    background-color: rgba(0, 0, 0, 0.7);
  }
  .modal-content {
    position: relative;
    background-color: white;
    margin: auto;
    padding: 20px;
    border: 1px solid #888;
    width: 60%;
    box-shadow: 3px 3px 3px grey;
    & .modal-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      & .modal-header__title {
        font-size: 18px;
        font-weight: bold;
        word-spacing: 2px;
      }
      & .modal-header__closeBtn {
        width: 20px;
        height: 20px;
        border: 1px solid grey;
        border-radius: 50%;
        padding: 10px;
        background: black;
        color: white;
        text-align: center;
        & .close {
          cursor: pointer;
        }
        &:hover {
          border: 2px solid black;
        }
      }
    }
    & .modal-body {
      display: flex;
      margin-top: 14px;
      & .modal-body__poster {
        width: 250px;
        height: 320px;
      }
      & .modal-body__desc {
        margin-left: 20px;
        & > p {
          margin-bottom: 20px;
        }
        & .desc-date {
          font-weight: bold;
        }
        & .desc-rating {
          font-weight: bold;
        }
      }
    }
  }
  @media only screen and (max-width: 768px) {
    .modal-container {
        padding-top: 80px;
    }
    .modal-content {
        width: 80%;
      & .modal-body {
        & .modal-body__poster {
          width: 180px;
          height: 230px;
        }
      }
    }
  }
  @media only screen and (max-width: 420px) {
    .modal-container {
        padding-top: 30px;
    }
    .modal-content {
        width: 80%;
      & .modal-body {
        flex-direction: column;
        & .modal-body__desc {
            margin-top: 20px;
            margin-left: 0px;
      }
    }
  }
  @media only screen and (max-width: 330px) {
    .modal-container {
        padding-top: 30px;
    }
    .modal-content {
        width: 90%;
        & .modal-body {
          flex-direction: column;

          & .modal-body__poster {
            width: 120px;
            height: 160px;
          }
          & .modal-body__desc {
              margin-top: 20px;
              margin-left: 0px;
        }
      }
  }
`;
