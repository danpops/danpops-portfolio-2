Feature: Landing Page

  Scenario: Verify Visibility of All Sections
    Given I open the "landing" page
    Then I see the "landing" page
    And I see the "HERO_SECTION" on the "landing" page
    And I see the "ABOUT_SECTION" on the "landing" page
    And I see the "SPECIALTIES_SECTION" on the "landing" page
    And I see the "EXPERIENCE_SECTION" on the "landing" page
    And I see the "CONTACT_SECTION" on the "landing" page
    And I see the "FOOTER" on the "landing" page

  Scenario: Verify Navigation Elements
    Given I open the "landing" page
    And I see the "NAVIGATION_BRAND" on the "landing" page
    And I see the "NAVIGATION_TOGGLE" on the "landing" page
    # When I use the "NAVIGATION_TOGGLE" button on the "landing" page
    # Then I see the "NAVIGATION_MENU" on the "landing" page
    # And I see 4 different "NAVIGATION_ITEMS" on the "landing" page

  Scenario: Verify Hero Section Content
    Given I open the "landing" page
    And I see the "HERO_TEXT" on the "landing" page
    And I see the "TYPEWRITER_TEXT" on the "landing" page
    And I see the "ABOUT_BUTTON" on the "landing" page

  Scenario: Verify About Section Content
    Given I open the "landing" page
    Then I see the "ABOUT_BUTTON" on the "landing" page
    When I use the "ABOUT_BUTTON" button on the "landing" page
    Then I see the "ABOUT_CONTENT" on the "landing" page

  Scenario: Verify Specialties Section Content
    Given I open the "landing" page
    Then I see the "SPECIALTIES_SECTION" on the "landing" page
    And I see 6 different "SPECIALTY_ITEMS" on the "landing" page

  Scenario: Verify Experience Section Content
    Given I open the "landing" page
    Then I see the "EXPERIENCE_SECTION" on the "landing" page
    And I see 2 different "EXPERIENCE_CARDS" on the "landing" page

  Scenario: Verify Contact Section Content
    Given I open the "landing" page
    Then I see the "CONTACT_SECTION" on the "landing" page
    And I see 3 different "CONTACT_OPTIONS" on the "landing" page