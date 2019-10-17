export default {
  Mutation: {
    toggleLang: (_root, { lang }, { cache }) => {
      const data = { lang };

      cache.writeData({ data });
      return lang;
    },
  },
};
