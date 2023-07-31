import { Given, When, Then } from '@wdio/cucumber-framework';
import SearchPage from "../pageobjects/search.page.ts";

const pages = {
    search: SearchPage
}



Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page as keyof typeof pages].openStart();
});
//Scenario: 'Fast search film by name'
When(/^I input "([^"]*)" in the search field$/, async (filmName) => {
    await pages.search.findSearch.setValue(filmName);
});

Then(/^I should see the film "([^"]*)" in the search results$/, async (_filmName) => {
    try {
        await expect(pages.search.findFilmFast).toBeDisplayed();
    }
    catch {
        await expect(pages.search.notFindFilm).toBeDisabled();
    }
});


//Scenario: 'Global search film by name'

When(/^I input "([^"]*)" in the search field and click button Search$/, async (filmName) => {
    await pages.search.findSearch.setValue(filmName);
    await pages.search.clickGlobalSerach.click();
    await pages.search.open(`/index.php?kp_query=${filmName}`);
});

Then(/^I should see the film "([^"]*)" in the global search results$/, async (_filmName) => {
    try {
        await expect(pages.search.findFilmGlobal).toBeDisplayed();
    }
    catch {
        await expect(pages.search.notFindFilmGlobal).toBeDisabled();
    }
});


//Scenario: 'Random film with an empty search'

When(/^I click button Search$/, async () => {
    await pages.search.clickGlobalSerach.click();

});

Then(/^I should see empty search with parameter search$/, async () => {
    await expect(pages.search.randomFilm).toBeDisplayed();
    await expect(pages.search.randomFilm).toBeEnabled();
});

When(/^I click button random film$/, async () => {
    await pages.search.randomFilm.click();

});

Then(/^I schould see random film$/, async () => {
    await expect(pages.search.randomFilmResult).toBeDisplayed();
});



Scenario: 'Find the top 250 movies';

When(/^I click button filtr$/, async () => {
    await pages.search.filtrButton.click();
});

Then(/^I should see advanced search and button top 250$/, async () => {
    await expect(pages.search.top250).toBeDisplayed();
});

When(/^I click button top 250$/, async () => {
    await pages.search.top250.click();
});

Then(/^I see top 250 films$/, async () => {
    await expect(pages.search.bestFilms250).toBeDisplayed();
});



Scenario: 'Advanced film search by name';

When(/^I open the advanced search$/, async () => {
    await pages.search.open(`/s/`);
});

Then(/^I should see field by advanced serach$/, async () => {
    await expect(pages.search.fieldFindName).toBeDisplayed();
    await expect(pages.search.fieldFindName).toBeEnabled();
});

When(/^I input name film "([^"]*)"$/, async (_filmName) => {
    (await pages.search.fieldFindName).setValue("Ведьмак");
});

Then(/^I should see field Search is enable$/, async () => {
    await expect(pages.search.buttonSearch).toBeDisplayed();
    await expect(pages.search.buttonSearch).toBeEnabled();
});

When(/^I and click buttom Search$/, async () => {
    (await pages.search.buttonSearch).click();
});

Then(/^I should see the film "Ведьмак" in the advanced search results$/, async () => {
    await expect(pages.search.searchResult).toBeDisplayed();
});








