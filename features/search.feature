Feature: Search film 

@search
Scenario: Fast search film by name
  Given I am on the search page
  When I input "Тор" in the search field
  Then I should see the film "Тор" in the search results 

@search
Scenario: Global search film by name
  Given I am on the search page
  When I input "Мстители" in the search field and click button Search
  Then I should see the film "Мстители" in the global search results

@search
Scenario: Random film with an empty search
  Given I am on the search page
  When I click button Search
  Then I should see empty search with parameter search 
  When I click button random film
  Then I schould see random film

@search_top250
Scenario: Find the top 250 movies
  Given I am on the search page
  When I click button filtr
  Then I should see advanced search and button top 250
  When I click button top 250
  Then I see top 250 films

@search_advanced
Scenario: Advanced film search by name
  Given I am on the search page
  When I open the advanced search
  Then I should see field by advanced serach
  When I input name film "Ведьмак"
  Then I should see field Search is enable
  When I and click buttom Search
  Then I should see the film "Ведьмак" in the advanced search results


