import React from 'react';
import PropTypes from 'prop-types';

import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

import { Container, InnerContainer, PageButton } from './styles';

export default function PageContainer({ setPage, page, length, loading }) {
  return (
    <Container length={length} loading={loading}>
      {!loading && (
        <InnerContainer>
          <PageButton disabled={page === 1} onClick={() => setPage(page - 1)}>
            <MdChevronLeft size={30} color="#fff" />
          </PageButton>
          <span>{page}</span>
          <PageButton disabled={length < 10} onClick={() => setPage(page + 1)}>
            <MdChevronRight size={30} color="#fff" />
          </PageButton>
        </InnerContainer>
      )}
    </Container>
  );
}

PageContainer.propTypes = {
  setPage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  length: PropTypes.number.isRequired,
  loading: PropTypes.number.isRequired,
};
