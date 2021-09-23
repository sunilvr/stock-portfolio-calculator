# stock-portfolio-calculator
An app that helps users to calculate their stock portfolios and respective performances


# Note: 
The calculation logic is customised and relevant explanation can be found below 
The numbers are parsed to display Integer values just to make them more appleaing on the output.


## Custom Logic explanation: 

    Profit calculation logic explanation:
      if the user has bought 10 stocks for 20 rupees each, and the current selling price of each stock is 28 rupees
      then profit = (selling_price - buying_price) * number_of_stocks
      profit = (28 - 20) * 10 = 80 rupees
  
    Profit percentage calculation logic explanation:
      profit_percentage =  ( profit / (buying_price * number_of_stocks) ) * 100
      profit_percentage =  ( 80 / (20 * 10) ) * 100 = 40 %
  
  
    Loss calculation logic explanation:
      if the user has bought 10 stocks for 20 rupees each, and the current selling price of each stock is 15 rupees
      then loss = ( buying_price - selling_price ) * number_of_stocks
      loss = (20 - 15) * 10 = 50 rupees
  
    Loss percentage calculation logic explanation:
      loss_percentage =  ( loss / (buying_price * number_of_stocks) ) * 100
      loss_percentage =  ( 50 / (20 * 10) ) * 100 = 25 %
  


