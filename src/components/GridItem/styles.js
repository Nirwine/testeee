import styled from "styled-components";
import { FaTrash } from "react-icons/fa";

export const Tr = styled.tr`
  /* Adicione estilos adicionais para a linha da tabela conforme necessário */
`;

export const Td = styled.td`
  padding-top: 15px;
  text-align: ${(props) => (props.alignCenter ? "center" : "start")};
  word-break: break-all; /* Corrigido removendo a barra extra */
`;

export const TrashIcon = styled(FaTrash)`
  cursor: pointer;
  svg {
    width: 18px;
    height: 18px;
  }
`;
