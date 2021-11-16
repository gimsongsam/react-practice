import React,{useEffect} from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const categories = [
    {
        name: 'all',
        text: '전체보기'
    },
    {
        name: 'business',
        text: '비즈니스'
    },
    {
        name: 'health',
        text: '건강'
    },
    {
        name: 'science',
        text: '과학'
    },
    {
        name: 'sports',
        text: '스포츠'
    },
    {
        name: 'technology',
        text: '기술'
    }
];

const CategoriesBlock = styled.div`
    display: flex;
    padding: 1rem;
    width: 768px;
    margin: 0 auto;
    @media screen and (max-width: 768px){
        width: 100%;
        overflow-x: auto;
    }
`;

const Category = styled(NavLink)`
    font-size: 1.125rem;
    cursor: pointer;
    white-space: pre;
    text-decoration: none;
    color: inherit;
    padding-bottom: 0.25rem;

    &:hover{
        color: #495057;
    }

    &.active {
        font-weight: 600;
        border-bottom: 2px solid #22b8cf;
        color: #22b8cf;
        &:hover{
            color: #3bc9db;
        }
    }
    
    & + &{
        margin-left: 1rem;
    }
`;

const Categories = () => {

    useEffect(() => {
        console.log('Categories ');
    // eslint-disable-next-line react-hooks/exhaustive-deps
    });
    return (
        <CategoriesBlock> {/* CategoriesBlock을 엘리먼트로 사용 */}
            {categories.map(c => ( 
                <Category 
                    key={c.name}
                    activeClassName="active"
                    exact={c.name === 'all'}
                    to={c.name === 'all' ? '/' : `/${c.name}`}
                >
                    {c.text}
                </Category>
            ))}
            {/* categories 객체의 값을 map을 이용해 넣어주기 */}
            
        </CategoriesBlock>
    );
};

export default Categories;
