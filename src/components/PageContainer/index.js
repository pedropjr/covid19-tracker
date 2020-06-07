/* eslint-disable react/prop-types */
import React from 'react';

import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

import { Container, InnerContainer, PageButton } from './styles';

function PageContainer({ setPage, page, length, loading }) {
  return (
    <>
      {!loading && (
        <Container length={length}>
          <InnerContainer>
            <PageButton disabled={page === 1} onClick={() => setPage(page - 1)}>
              <MdChevronLeft size={30} color="#fff" />
            </PageButton>
            <span>{page}</span>
            <PageButton
              disabled={length < 10}
              onClick={() => setPage(page + 1)}
            >
              <MdChevronRight size={30} color="#fff" />
            </PageButton>
          </InnerContainer>
        </Container>
      )}
    </>
  );
}

export default PageContainer;
