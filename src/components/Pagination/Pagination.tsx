import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PaginationLink, PaginationRoot } from './Pagination.styles';

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageSelect: (page: number) => void;
}

function getPagesRange(currentPage: number, totalPages: number) {
  const lowerBound = Math.max(1, currentPage - 5);
  const upperBound = Math.min(totalPages, currentPage + 5);

  return [...Array(upperBound - lowerBound + 1).keys()].map((n) => n + lowerBound);
}

function getLinkLabel(page: number, isCurrent: boolean) {
  return `${isCurrent ? 'Current Page, ' : ''}Page ${page}`;
}

export function Pagination({ currentPage, totalPages, onPageSelect }: PaginationProps) {
  const pagesToDisplay = getPagesRange(currentPage, totalPages);
  const shouldDisplayLeftArrow = !pagesToDisplay.includes(1);
  const shouldDisplayRightArrow = !pagesToDisplay.includes(totalPages);

  return (
    <PaginationRoot role="navigation">
      {shouldDisplayLeftArrow && (
        <PaginationLink>
          <a aria-label="Go to first page" onClick={() => onPageSelect(1)}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </a>
        </PaginationLink>
      )}
      {pagesToDisplay.map((page) => (
        <PaginationLink key={page} selected={currentPage === page}>
          <a
            role="link"
            aria-current={currentPage === page ? true : undefined}
            aria-label={getLinkLabel(page, currentPage === page)}
            onClick={() => onPageSelect(page)}
          >
            {page}
          </a>
        </PaginationLink>
      ))}
      {shouldDisplayRightArrow && (
        <PaginationLink>
          <a aria-label="Go to last page" onClick={() => onPageSelect(totalPages)}>
            <FontAwesomeIcon icon={faArrowRight} rotate={180} />
          </a>
        </PaginationLink>
      )}
    </PaginationRoot>
  );
}
