import styled from "styled-components";

export const AffichageStyle = styled.div`
         background-color: white;
         .categories {
           display: flex;
           flex-wrap: wrap;
           align-content: space-between;
           padding: 15px;
           padding-bottom: 0px;
           padding-top: 0px;
         }
         .red {
           background-color: #d91438;
         }
         .white {
           background-color: white;
         }
         .lienSignalements {
           margin:20px 0px 0px 70px;

           a {
             text-decoration: none;
             color: #000000;
             font-size:14px;
           }
         }
         .titre {
           padding: 20px;
         }
       `;

export const Container = styled.div`
  padding: 20px;
`;
