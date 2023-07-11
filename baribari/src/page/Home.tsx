import { styled } from 'styled-components';
import { ReactComponent as Logo } from '../assets/logo.svg';
import { BellIcon, OrderIcon, RPointerBigIcon, SearchIcon } from '../component/IconFin';
import Navigator from '../component/Navigator';
import ContentContainer from '../component/ContentContainer';
import RandomTab from '../component/RandomTab';
import DropDown from '../component/DropDown';
import HeartList from '../component/HeartList';

export default function Home() {
    return (
        <div>
            <HeaderHome>
                <Logo />
                <RightSideHeader>
                    <BellIcon />
                    <OrderIcon />
                </RightSideHeader>
            </HeaderHome>

            <RandomTab />
            <WrapperTab>
                <InquiryTab>
                    <div>
                        <InquiryTabTitle>바리바리에 입점 문의하기</InquiryTabTitle>
                        <InquiryTabSub>바리바리에 입점하고 더 많은 수익 창출해보세요!</InquiryTabSub>
                    </div>
                    <RPointerBigIcon />
                </InquiryTab>
                <SearchTab>
                    <p>반찬 이름을 검색해보세요</p>
                    <SearchIcon />
                </SearchTab>
            </WrapperTab>
            <WrapperList>
                <Container>
                    <HeartList />
                    <DropDown />
                </Container>
                <ContentContainer />
            </WrapperList>
            <WrapperNav>
                <Navigator />
            </WrapperNav>
        </div>
    );
}

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const WrapperTab = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 0px 16px;
`;

const WrapperList = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding-left: 16px;
    margin-top: 5px;
`;

const WrapperNav = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
`;

const HeaderHome = styled.div`
    display: flex;
    padding: 48px 16px 8px 16px;
    justify-content: space-between;
    align-items: center;
`;

const RightSideHeader = styled.div`
    display: flex;
    gap: 15px;
`;

const InquiryTab = styled.div`
    display: flex;
    width: 100%;
    padding: 16px;
    justify-content: space-between;
    align-items: center;
    border-radius: 12px;
    background: #fff1ee;
`;

const InquiryTabTitle = styled.div`
    color: #ff7455;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 23px;
`;

const InquiryTabSub = styled.div`
    color: #949494;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
`;

const SearchTab = styled.button`
    height: 45px;
    width: 100%;
    display: flex;
    padding: 8px 16px;
    justify-content: space-between;
    align-items: center;
    border-radius: 8px;
    border: none;
    background-color: #efefef;
    color: #949494;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    font-family: Pretendard-Regular;
    line-height: 28px;
`;
