SELECT Name AS [Item.name], Address AS [ShopAddress], Price AS 'Item.Price'
FROM ItemDB
FOR JSON PATH, ROOT('Item')