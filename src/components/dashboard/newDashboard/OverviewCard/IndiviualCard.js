import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import LinerGraph from './LinerGraph';

export default function IndiviualCard({ cardData }) {
  return (
    <div className="card overview-card rounded-3 shadow-sm custom-border">
      <div className="card-body">
        <div className="d-flex flex-row flex-wrap justify-content-between">
          <div>
            <p className="overview-card-title">{cardData.total}</p>
            <p className="overview-card-subtitle">{cardData?.title}</p>
          </div>
        </div>
        {cardData.graph_data.map((item) => (
          <LinerGraph item={item} key={item?.title} />
        ))}
      </div>
      <div className="text-center pb-3">
        <Button type="button" className="custom-border bg-white">
          <Link
            className="text-decoration-none"
            to={cardData?.title === 'Employees' ? '/employee' : '/department'}
          >
            {`VIEW ${cardData.title.toUpperCase()}`}
          </Link>
        </Button>
      </div>
    </div>
  );
}

IndiviualCard.propTypes = {
  cardData: PropTypes.object,
};
