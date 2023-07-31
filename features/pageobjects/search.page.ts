import Page from './page.ts';


class SearchPage extends Page { 

    public get findSearch() {
        return $('//input[@name="kp_query"]');
    }

    public get clickGlobalSerach(){
        return $('//button[@type="submit"]');
    }

    public get findFilmFast() {
        return $('//div[@data-index="0"]');
    }

    public get notFindFilm(){
        return $('=По вашему запросу ничего не найдено');
    }

    public get findFilmGlobal(){
        return $('//div[@class="element most_wanted"]');
    }

    public get notFindFilmGlobal() {
        return $('=К сожалению, по вашему запросу ничего не найдено...');
    }

    public get filtrButton() {
        return $('a[href="/s/"][aria-label="Расширенный поиск"]');
    }

    public get top250() {
        return $('a[href="/level/20/"]');
    }

    public get bestFilms250() {
        return $('//h1[@class="styles_title__jB8AZ"]');
    }

    public get fieldFindName() {
        return $('#find_film');
    }

    public get buttonSearch() {
        return $('//input[@class="el_18 submit nice_button"]');
    }

    public get searchResult(){
        return $('//div[@class="search_results"]//div[@class="element most_wanted"]');
    }

    public get randomFilm() {
        return $('#search');
    }

    public get randomFilmResult(){
        return $('//div[@class="movieBlock _NO_HIGHLIGHT_"]');
    }
}

export default new SearchPage();
