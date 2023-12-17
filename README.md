# Simple Mail Sender using Spring Boot

This Spring Boot application allows you to send emails via SMTP, integrating with the Brevo service for seamless email delivery.

## Getting Started

Follow these steps to set up and use the Simple Mail Sender:

### Prerequisites

Make sure you have the following installed on your system:

- Java

### Setting up Brevo

1. Create an account on [Brevo](https://app.brevo.com/).
2. Log in and navigate to the Free Plan section to obtain your SMTP server details.

### Configuring Application

1. Clone the repository:

    ```bash
    git clone https://github.com/KrishanMihiranga/simple-mail-sender.git
    ```

2. Open the `application.properties` file in the `src/main/resources` directory.

3. Fill in the SMTP and API details obtained from Brevo:

    ```properties
    # application.properties

    # SMTP Configuration
    spring.mail.host=your-smtp-host
    spring.mail.port=your-smtp-port
    spring.mail.username=your-smtp-username
    spring.mail.password=your-smtp-password

    ```

   Replace `your-smtp-host`, `your-smtp-port`, `your-smtp-username` and `your-smtp-password` with your Brevo SMTP and API details.

## Usage

1. Run the backend:

    ```bash
    mvn spring-boot:run
    ```

2. Run the frontend.

Now you can use the application to send emails via SMTP using the configured Brevo service.



![Capture](https://github.com/KrishanMihiranga/simple-mail-sender/assets/119467538/97711152-634e-4c07-b7ac-0ac384b7988e)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
