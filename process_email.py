import cgi

print("Content-Type: text/html\n")  # Output HTML content headers

form = cgi.FieldStorage()  # Get form data
email = form.getvalue('email')  # Retrieve the email input

# Validate the email
if email and '@' in email and '.' in email:
    print(f"<h1>Thank you! The email you entered is: {email}</h1>")
else:
    print("<h1>Invalid email address. Please try again.</h1>")
