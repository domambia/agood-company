import styled from "styled-components";
import { SearchIcon } from "lucide-react";
export const SearchBar = () => {
  return (
    <SearchBarWrapper>
      <SearchBarIcon>
        <SearchIcon size={24} color="#656D76" />
      </SearchBarIcon>
      <SearchBarInput placeholder="Search" />
    </SearchBarWrapper>
  );
};

const SearchBarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border-radius: 10px;
  border: 1px solid #ddd;
  height: 52px;
  padding: 0.5rem 0.5rem;
`;
const SearchBarInput = styled.input`
  padding: 8px;
  border: none;
  outline-width: 0;
  color: #656d76;
  height: 100%;
`;
const SearchBarIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  align-self: center;
`;

// mobile configurations
