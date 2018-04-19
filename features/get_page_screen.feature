Feature: 抓取网站的截图


  Scenario: 抓取网站的截图
    Given given a website "https://example.com"
    When access the website
    Then capture a screen shot

#  Scenario Outline: much more complex stuff
#    Given a variable set to <var>
#    When I increment the variable by <increment>
#    Then the variable should contain <result>
#
#    Examples:
#      | var | increment | result |
#      | 100 |         5 |    105 |
#      |  99 |      1234 |   1333 |
#      |  12 |         5 |     17 |
