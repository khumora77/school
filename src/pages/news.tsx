import { news } from "@/constants";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const News = () => {
  const { t } = useTranslation();

  return (
    <div className="max-w-6xl mx-auto mt-20 px-4 mb-16">


      {/* Cards */}
      <div className="flex flex-col items-center gap-6">
        {news.map((item, index) => (
          <motion.div
            key={item.id || index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="w-[80%] flex flex-col md:flex-row bg-white rounded-2xl border border-[#1b4571] shadow-lg hover:shadow-2xl transition overflow-hidden"
          >
            {/* Image */}
            <div className="md:w-1/3 w-full h-64 md:h-auto">
              <img
                src={item.image}
                alt={t(item.title)}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col justify-between md:w-2/3">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  {t(item.title)}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {t(item.text)}
                </p>
              </div>

              {item.link && (
                <div className="mt-4">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-5 py-2 text-sm bg-[#1b4571] hover:opacity-90 rounded-full text-white transition"
                  >
                    {t("read_more") || "Batafsil"}
                  </a>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default News;
