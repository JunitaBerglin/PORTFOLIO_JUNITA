export function contact() {
  const contactWrapper = document.getElementById(
    "contactWrapper"
  ) as HTMLDivElement;
  const contactPageTitle: HTMLParagraphElement =
    document.createElement("p");
  const contactPageText: HTMLParagraphElement =
    document.createElement("p");
  const contactForm: HTMLFormElement = document.createElement("form");
  const formCaptcha: HTMLInputElement =
    document.createElement("input");
  const formReply: HTMLInputElement = document.createElement("input");
  const formResponse: HTMLInputElement =
    document.createElement("input");
  const contactFormNameContainer: HTMLDivElement =
    document.createElement("div");
  const contactFormContactContainer: HTMLDivElement =
    document.createElement("div");
  const contactFormFirstNameContainer: HTMLDivElement =
    document.createElement("div");
  const contactFormFirstNameLabel: HTMLLabelElement =
    document.createElement("label");
  const contactFormFirstNameInput: HTMLInputElement =
    document.createElement("input");
  const contactFormLastNameContainer: HTMLDivElement =
    document.createElement("div");
  const contactFormLastNameLabel: HTMLLabelElement =
    document.createElement("label");
  const contactFormLastNameInput: HTMLInputElement =
    document.createElement("input");
  const contactFormMailContainer: HTMLDivElement =
    document.createElement("div");
  const contactFormMailLabel: HTMLLabelElement =
    document.createElement("label");
  const contactFormMailInput: HTMLInputElement =
    document.createElement("input");
  const contactFormPhoneContainer: HTMLDivElement =
    document.createElement("div");
  const contactFormPhoneLabel: HTMLLabelElement =
    document.createElement("label");
  const contactFormPhoneInput: HTMLInputElement =
    document.createElement("input");
  const contactFormMessageContainer: HTMLDivElement =
    document.createElement("div");
  const contactFormMessageLabel: HTMLLabelElement =
    document.createElement("label");
  const contactFormMessageInput: HTMLTextAreaElement =
    document.createElement("textarea");
  const contactFormSubmitButton: HTMLButtonElement =
    document.createElement("button");

  contactWrapper.setAttribute("id", "contact");
  contactWrapper.classList.add("contact");
  contactPageTitle.classList.add("contact__title");
  contactPageText.classList.add("contact__text");
  contactForm.classList.add("form");
  contactFormNameContainer.classList.add("form__names");
  contactFormContactContainer.classList.add("form__contacts");
  contactFormFirstNameContainer.classList.add("form__container");
  contactFormLastNameContainer.classList.add("form__container");
  contactFormMailContainer.classList.add("form__container");
  contactFormPhoneContainer.classList.add("form__container");
  contactFormMessageContainer.classList.add("form__container");
  contactFormFirstNameLabel.classList.add("form__label");
  contactFormLastNameLabel.classList.add("form__label");
  contactFormMailLabel.classList.add("form__label");
  contactFormPhoneLabel.classList.add("form__label");
  contactFormMessageLabel.classList.add("form__label");
  contactFormFirstNameInput.classList.add("form__input");
  contactFormLastNameInput.classList.add("form__input");
  contactFormMailInput.classList.add("form__input");
  contactFormPhoneInput.classList.add("form__input");
  contactFormMessageInput.classList.add("form__input--message");
  contactFormSubmitButton.classList.add("form__button");

  contactForm.method = "POST";
  contactForm.action =
    "https://formsubmit.co/66bbe4914c83b8fb51f38a400fca1567";
  formReply.type = "hidden";
  formReply.name = "_next";
  formReply.value = "https://junitaberglin.com/";
  formResponse.type = "hidden";
  formResponse.name = "_autoresponse";
  formResponse.value =
    "Thanks for your e-mail, I'll get back to you as soon as possible!";
  formCaptcha.type = "hidden";
  formCaptcha.name = "_captcha";
  formCaptcha.value = "false";
  contactFormFirstNameLabel.setAttribute("for", "firstName");
  contactFormLastNameLabel.setAttribute("for", "lastName");
  contactFormMailLabel.setAttribute("for", "mail");
  contactFormPhoneLabel.setAttribute("for", "phone");
  contactFormMessageLabel.setAttribute("for", "message");
  contactFormFirstNameInput.setAttribute("id", "firstName");
  contactFormLastNameInput.setAttribute("id", "lastName");
  contactFormMailInput.setAttribute("id", "mail");
  contactFormPhoneInput.setAttribute("id", "phone");
  contactFormMessageInput.setAttribute("id", "message");
  contactFormFirstNameInput.type = "text";
  contactFormLastNameInput.type = "text";
  contactFormMailInput.type = "email";
  contactFormPhoneInput.type = "phone";
  contactFormSubmitButton.type = "submit";
  contactFormFirstNameInput.name = "First Name";
  contactFormLastNameInput.name = "Last Name";
  contactFormMailInput.name = "email";
  contactFormPhoneInput.name = "Phone";
  contactFormMessageInput.name = "Message";
  contactFormFirstNameInput.required = true;
  contactFormLastNameInput.required = true;
  contactFormMailInput.required = true;
  contactFormMessageInput.required = true;

  contactPageText.innerHTML = "Get in touch!";
  contactFormFirstNameLabel.innerHTML = "First Name";
  contactFormLastNameLabel.innerHTML = "Last Name";
  contactFormMailLabel.innerHTML = "Mail";
  contactFormPhoneLabel.innerHTML = "Phone";
  contactFormMessageLabel.innerHTML = "Your Message";
  contactFormSubmitButton.innerHTML = "Submit";

  contactForm.appendChild(contactFormNameContainer);
  contactForm.appendChild(contactFormContactContainer);
  contactForm.appendChild(formReply);
  contactForm.appendChild(formResponse);

  contactFormNameContainer.appendChild(contactFormFirstNameContainer);
  contactFormNameContainer.appendChild(contactFormLastNameContainer);
  contactFormContactContainer.appendChild(contactFormMailContainer);
  contactFormContactContainer.appendChild(contactFormPhoneContainer);
  contactForm.appendChild(contactFormMessageContainer);
  contactForm.appendChild(contactFormSubmitButton);
  contactFormFirstNameContainer.appendChild(
    contactFormFirstNameLabel
  );
  contactFormFirstNameContainer.appendChild(
    contactFormFirstNameInput
  );
  contactFormLastNameContainer.appendChild(contactFormLastNameLabel);
  contactFormLastNameContainer.appendChild(contactFormLastNameInput);
  contactFormMailContainer.appendChild(contactFormMailLabel);
  contactFormMailContainer.appendChild(contactFormMailInput);
  contactFormPhoneContainer.appendChild(contactFormPhoneLabel);
  contactFormPhoneContainer.appendChild(contactFormPhoneInput);
  contactFormMessageContainer.appendChild(contactFormMessageLabel);
  contactFormMessageContainer.appendChild(contactFormMessageInput);
  contactWrapper.appendChild(contactPageTitle);
  contactWrapper.appendChild(contactPageText);
  contactWrapper.appendChild(contactForm);
  //  document.body.appendChild(contactWrapper);
}
