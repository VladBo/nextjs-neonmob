import { Icons } from "../ui/Icons";

const HomePageFeaturedSection = () => {
  return (
    <section className="w-full items-center justify-center pt-6 pb-8 md:pt-10 md:pb-12 lg:pt-16 lg:pb-24">
      <div className="container flex flex-row justify-center">
        <div className="basis-1/4 overflow-hidden rounded-lg border border-slate-200 bg-white/80 p-2 shadow-2xl">
          <div className="bg-gradient-to-r from-cyan-500 to-blue-500">
            <p className="py-2 text-center text-sm font-bold uppercase text-white">
              Trade Offers
            </p>
          </div>
          <div className="h-5/6">
            <div className="event-loader ng-hide">
              <Icons.check />
            </div>
            <div className="ng-scope">
              <div className="ng-scope ng-isolate-scope">
                <div className="empty-container">
                  <i className="empty-tick"></i>
                  <br />
                  <span className="empty-text ng-binding">
                    No Trade Offers.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="basis-1/2 p-2">
          <div className="text-xl font-black">Featured & Popular</div>
        </div>
        <div className="basis-1/4 overflow-hidden rounded-lg border border-slate-200 bg-white/80 p-2 shadow-2xl">
          <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            <p className="py-2 text-center text-sm font-bold uppercase text-white">
              Recent Progress
            </p>
          </div>
          <div className="h-5/6">
            <div className="event-loader ng-hide">
              <Icons.check />
            </div>
            <div className="ng-scope">
              <div className="ng-scope ng-isolate-scope">
                <div className="empty-container">
                  <i className="empty-tick"></i>
                  <br />
                  <span className="empty-text ng-binding">
                    No Trade Offers.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePageFeaturedSection;
