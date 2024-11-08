import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get(
    'https://api.themoviedb.org/3/discover/movie?api_key=c225640b9109317dc84c9f661f0ca0ba&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc',
    () => {
      // Note that you DON'T have to stringify the JSON!
      return HttpResponse.json({
        page: 1,
        results: [
          {
            backdrop_path: '/18TSJF1WLA4CkymvVUcKDBwUJ9F.jpg',
            id: 1034541,
            original_title: 'Terrifier 3',
            overview:
              "Five years after surviving Art the Clown's Halloween massacre, Sienna and Jonathan are still struggling to rebuild their shattered lives. As the holiday season approaches, they try to embrace the Christmas spirit and leave the horrors of the past behind. But just when they think they're safe, Art returns, determined to turn their holiday cheer into a new nightmare. The festive season quickly unravels as Art unleashes his twisted brand of terror, proving that no holiday is safe.",
            poster_path: '/63xYQj1BwRFielxsBDXvHIJyXVm.jpg',
            release_date: '2024-10-09',
            title: 'Terrifier 3',
          },
          {
            backdrop_path: '/3V4kLQg0kSqPLctI5ziYWabAZYF.jpg',
            id: 912649,
            original_title: 'Venom: The Last Dance',
            overview:
              "Eddie and Venom are on the run. Hunted by both of their worlds and with the net closing in, the duo are forced into a devastating decision that will bring the curtains down on Venom and Eddie's last dance.",
            poster_path: '/k42Owka8v91trK1qMYwCQCNwJKr.jpg',
            release_date: '2024-10-22',
            title: 'Venom: The Last Dance',
          },
        ],
        total_pages: 46932,
        total_results: 938638,
      });
    }
  ),
];
