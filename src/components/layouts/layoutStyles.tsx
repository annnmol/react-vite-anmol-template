import { styled } from "styled-components";

const TOP_MENU_HEIGHT = 4;

export const LayoutWrap = styled.div`
  && {
    background-color: #ad1212;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }
`;

export const LayoutTopMenuWrap = styled.header`
  && {
    background-color: blue;
    z-index: 999;
    height: ${TOP_MENU_HEIGHT}rem;
    width: 100%;
    padding: 0 1rem;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
    display: flex;
    align-items: center;
    justify-content: space-between;

    .topMenuRightSide {
      display: flex;
      align-items: center;
      gap: 1rem;
      justify-content: flex-end;
    }
  }
`;

export const LayoutContentWrap = styled.div`
  && {
    background-color: #f2f2f2;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    display: flex;
  }
`;
