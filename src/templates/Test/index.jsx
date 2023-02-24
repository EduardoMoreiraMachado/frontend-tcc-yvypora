import { GreenButton } from '../../components/GreenButton';
import { InputHeader } from '../../components/SearchInputHeader';
import { WhiteButton } from '../../components/WhiteButton';
import './style.css';

export const Test = () => {

    return (
        <>
            <InputHeader />
            <GreenButton text='Green Button'/>
            <WhiteButton text='White Button'/>
        </>
    )

}

export default Test;
