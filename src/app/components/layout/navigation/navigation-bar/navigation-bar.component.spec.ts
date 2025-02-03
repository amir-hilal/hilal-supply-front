// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { BehaviorSubject } from 'rxjs';
// import {
//     SocialAuthService,
//     SocialLoginModule,
//     GoogleLoginProvider,
//     SocialUser,
// } from '@abacritt/angularx-social-login';
// import { AngularFireAuthModule } from '@angular/fire/compat/auth';
// import { AngularFireModule } from '@angular/fire/compat';
// import { provideMockStore } from '@ngrx/store/testing';
// import { selectTheme } from '@app/store/selectors/config.selector';

// import { AuthService } from '@app/services/authentication/auth.service';

// import { NavigationBarComponent } from './navigation-bar.component';
// import { selectUser } from '@app/store/selectors';
// import { ActivatedRoute } from '@angular/router';
// import { Database } from '@angular/fire/database';
// import { Auth } from '@angular/fire/auth';

// const mockFirebaseConfig = {
//     apiKey: 'TEST KEY',
//     authDomain: 'TEST DOMAIN',
//     databaseURL: 'TEST DATABASE URL',
//     projectId: 'TEST PROJECT ID',
//     storageBucket: 'TEST STORAGE BUCKET',
//     messagingSenderId: 'TEST SENDER ID',
//     appId: 'TEST APP ID',
//     measurementId: 'TEST MEASUREMENT ID',
// };

// describe('NavigationBarComponent', () => {
//     let component: NavigationBarComponent;
//     let fixture: ComponentFixture<NavigationBarComponent>;
//     const authStateSubject = new BehaviorSubject<SocialUser | null>(null);

//     const initialState = {
//         config: {
//             theme: 'light',
//         },
//         user: {
//             fullName: '',
//             email: '',
//             id: '',
//             photoUrl: '',
//         },
//     };

//     const fakeActivatedRoute = {
//         snapshot: {
//             data: {},
//             paramMap: {
//                 // eslint-disable-next-line @typescript-eslint/no-unused-vars
//                 get(key) {
//                     return 'dashboard';
//                 },
//             },
//         },
//     } as ActivatedRoute;

//     beforeEach(async () => {
//         await TestBed.configureTestingModule({
//             imports: [
//                 NavigationBarComponent,
//                 AngularFireModule.initializeApp(mockFirebaseConfig),
//                 AngularFireAuthModule,
//             ],
//             providers: [
//                 {
//                     provide: Auth,
//                     useValue: jasmine.createSpyObj('Auth', ['someAuthMethod']),
//                 },
//                 {
//                     provide: AuthService,
//                     useValue: {
//                         login: jasmine.createSpy('login').and.callFake(() => {
//                             const mockUser: any = {
//                                 photoUrl: 'Test-photo',
//                                 email: 'user@itxi.net',
//                                 idToken: 'mock-id-token',
//                                 name: 'Test User',
//                                 provider: 'google',
//                                 id: 'mock-id',
//                             };
//                             authStateSubject.next(mockUser);
//                         }),
//                         user: {
//                             photoUrl: 'Test-photo',
//                             email: 'user@itxi.net',
//                             idToken: 'mock-id-token',
//                             name: 'Test User',
//                             provider: 'google',
//                             id: 'mock-id',
//                         },
//                         isLoggedIn: jasmine
//                             .createSpy('isLoggedIn')
//                             .and.returnValue(true),
//                         auth: {
//                             authState: authStateSubject.asObservable(),
//                         },
//                         googleAuthSubscription: null,
//                     },
//                 },
//                 { provide: Database, useValue: '' },

//                 {
//                     provide: ActivatedRoute,
//                     useValue: {
//                         params: fakeActivatedRoute,
//                     },
//                 },
//                 provideMockStore({
//                     initialState,
//                     selectors: [
//                         {
//                             selector: selectTheme,
//                             value: 'light',
//                         },
//                         {
//                             selector: selectUser,
//                             value: {
//                                 fullName: 'John Doe',
//                                 email: 'john.doe@example.com',
//                                 id: '123',
//                                 photoUrl: 'https://example.com/john-doe.jpg',
//                             },
//                         },
//                     ],
//                 }),
//                 SocialAuthService,
//                 {
//                     provide: 'SocialAuthServiceConfig',
//                     useFactory: () => ({
//                         autoLogin: false,
//                         providers: [
//                             {
//                                 id: GoogleLoginProvider.PROVIDER_ID,
//                                 provider: new GoogleLoginProvider(
//                                     'TEST_GOOGLE_CLIENT_ID',
//                                 ),
//                             },
//                         ],
//                     }),
//                 },
//                 SocialLoginModule,
//                 {
//                     provide: AuthService,
//                     userValue: {
//                         isLoggedIn: jasmine
//                             .createSpy('isLoggedIn')
//                             .and.returnValue(false),
//                         login: jasmine.createSpy('login').and.callFake(() => {
//                             // Simulate a successful auth state change
//                             const mockUser: any = {
//                                 email: 'user@itxi.net',
//                                 idToken: 'mock-id-token',
//                                 name: 'Test User',
//                                 photoUrl: 'Test photo',
//                                 provider: 'google',
//                                 id: 'mock-id',
//                             };
//                             authStateSubject.next(mockUser);
//                         }),
//                         auth: {
//                             authState: authStateSubject.asObservable(),
//                         },
//                         googleAuthSubscription: null,
//                         unsubscribe: jasmine.createSpy('unsubscribe'),
//                     },
//                 },
//             ],
//         }).compileComponents();

//         fixture = TestBed.createComponent(NavigationBarComponent);
//         component = fixture.componentInstance;
//         fixture.detectChanges();
//     });

//     it('should create', () => {
//         expect(component).toBeTruthy();
//     });

//     it('should expand', () => {
//         component.navigation.navigationToggle('bar');
//         expect(component.navigation.isMenuOpen()).toBe(true);
//     });
// });
