import { Main } from './styles';

export function Search() {
    return (
    <Main>
        <h3>
            Refine sua busca
        </h3>
        <h5>
            Por preço
        </h5>
        <label>
            <input type="radio" name="busca"/>
            Até R$40
        </label>
        <label>
            <input type="radio" name="busca"/>
            R$40 A R$60
        </label>
        <label>
            <input type="radio" name="busca"/>
            R$100 A R$200
        </label>
        <label>
            <input type="radio" name="busca"/>
            R$200 A R$500
        </label>
        <label>
            <input type="radio" name="busca"/>
            Acima de R$500
        </label>
    </Main>
    )
}