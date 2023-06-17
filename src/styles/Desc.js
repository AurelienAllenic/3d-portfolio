import styled from "styled-components";

export const Desc = styled.div`
  width: 350px;
  height: auto;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  position: absolute;
  top: 50%;
  left: 90%;
  transform: translate(-50%, -50%);
  letter-spacing: 0.07em;
@media(max-width: 1073px){
    font-size: 0.8em;
    right: 20px;
}
@media(max-width: 603px){
    font-size: 0.8em;
    right: 20px;
    width: 250px;
}
@media(max-width: 443px){
    font-size: 0.7em;
    right: 20px;
    width: 200px;
}
@media(max-width: 368px){
    font-size: 0.67em;
    bottom: -45%;
    right: 40px;
    width: 250px;
}
@media(max-width: 330px){
    right: 0px;
}
@media(max-width: 292px){
    width: 200px;
}
@media(max-width: 246px){
    width: 150px;
    font-size: 0.6em;
}
`;
