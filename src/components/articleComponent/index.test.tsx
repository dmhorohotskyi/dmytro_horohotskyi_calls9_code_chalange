import { render, screen } from '@testing-library/react'
import ArticleComponent from './index'
import user from '@testing-library/user-event'

describe('ArticleComponent', () => {
    test('renders a heading', () => {
        render(<ArticleComponent />)
        const headElement = screen.getByRole('heading');
        expect(headElement).toHaveTextContent('Lorem ipsum dolor sit amet')
    });

    test('check if set as selected element', () => {
        const {container} = render (<ArticleComponent
            key={123}
            newsId={123}
            handleItemClick={() => {}}
            selectedArticle={123}
        />)


        const itemElement = container.getElementsByClassName('item');
        expect(itemElement[0].classList.contains('selected')).toBe(true);
    });

    test('check if set as selected element', () => {
        const {container} = render (<ArticleComponent
            key={123}
            newsId={123}
            handleItemClick={() => {}}
            selectedArticle={1234}
        />)


        const itemElement = container.getElementsByClassName('item');
        expect(itemElement[0].classList.contains('selected')).toBe(false);
    });

})
