import React, { Component } from 'react';
import NumberFormat from 'react-number-format';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import appConfig from '../../appConfig.json';
import arrowLeftSvg from '../../assets/arrowLeft.svg';
import Dropdown from '../../components/Dropdown/Dropdown';
import { getLocalisedDateString } from '../../libs/date-utils';
import { AppState, CryptoData, DisplayCurrency } from '../../types';

import './Header.scss';

const displayCurrenciesMap = appConfig.displayCurrencies;

interface HeaderProps {
	cryptoCurrencyData: CryptoData;
	displayCurrency: DisplayCurrency;
	dateStamp: Date;
}

class Header extends Component<HeaderProps> {

	public render() {
		const data = this.props.cryptoCurrencyData[0];

		return (
			<div className='header'>
				<Link className='header__link' to='/'>
					{data ?
						<div className='header__currency'>
							<span className='header__currency-circle'>
								<img className='header__currency-arrow' alt='back arrow' src={arrowLeftSvg} />
							</span>
							<span className='header__currency-title'>
								<div>{data.name}</div>
								<div className='header__currency-symbol'>{data.symbol}</div>
							</span>
							<span className='header__currency-price'>
								<NumberFormat
									value={data.price_usd}
									displayType={'text'}
									thousandSeparator={true}
									prefix={displayCurrenciesMap[this.props.displayCurrency]}
									decimalScale={2}
								/>
							</span>
						</div>
							:
						<h1 className='header__title'>Track Crypto</h1>
					}
				</Link>
				{this.props.dateStamp &&
					<span className='header__date'>
						Last updated: {getLocalisedDateString(this.props.dateStamp, 'en-GB')}
					</span>
				}
				<Dropdown />
			</div>
		);
	}
}

const mapStateToProps = (state:AppState):HeaderProps => ({
	cryptoCurrencyData: state.cryptoCurrencyData,
	displayCurrency: state.displayCurrency,
	dateStamp: state.dateStamp,
});

export default connect(mapStateToProps)(Header);
