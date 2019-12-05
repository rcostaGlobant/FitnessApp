

export class AppConfig {
  navSocialIcons: SocialIcons[];
  navColor: string;
  defaultLanguage: string;
  navLinks: NavLinks[];
  availableLanguages: AvailableLangs[];
}


class SocialIcons {
  color: string;
  icon: string;
  name: string;
}

class NavLinks {
  linkColor: string;
  linkIcon: string;
  linkName: string;
  linkUrl: string;
}

class AvailableLangs {
  langIcon: string;
  langName: string;
}
