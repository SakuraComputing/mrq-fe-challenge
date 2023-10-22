import { useCallback } from 'react';
import './symbolCard.css';
import { ReactComponent as IndustryLogo } from '@/assets/industry.svg';
import { ReactComponent as CompanyIcon } from '@/assets/company.svg';
import { ReactComponent as MarketCapIcon } from '@/assets/market_cap.svg';
import { useAppSelector } from '@/hooks/redux';

type SymbolCardProps = {
  id: string;
  onClick: (symbolId: string) => void;
  price: number;
};

function roundToDollars(value: number) { 
  return "$ " + 
      value.toFixed(0)
          .replace(/(\d)(?=(\d{3})+$)/g, "$1,"); 
}

const SymbolCard = ({ id, onClick, price }: SymbolCardProps) => {
  const { trend, industry, companyName, marketCap } = useAppSelector(
    (state) => state.stocks.entities[id]
  );
  const handleOnClick = useCallback(() => {
    onClick(id);
  }, [id]);

  return (
    <div onClick={handleOnClick} className="symbolCard">
      <div className='header'>
        {id}
        {trend && trend === 'UP'
          ? <img className='stockUp' src="/src/assets/up.png" alt="stockUp" /> : <img className='stockDown' src="/src/assets/down.png" alt="stockDown" />
        }
      </div>
      <div className='container'>
        <div className='price'>
          <div className='price__text' >Price:</div>
          <div className='price__value'>{roundToDollars(price || 0)} </div>
        </div>
        <div className='icon__group__container'>
          <div className='icon__container'>
            <CompanyIcon />{companyName}
          </div>
          <div className='icon__container'>
            <div><IndustryLogo /></div> 
            <div>{industry}</div>
          </div>
          <div className='icon__container'>
            <div><MarketCapIcon /></div>
            <div>{marketCap}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SymbolCard;
