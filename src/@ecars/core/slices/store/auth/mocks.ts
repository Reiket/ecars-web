import type {User} from '@ecars/core/types/types';
import type {AuthResponse, GetUserResponse} from '@ecars/core/api/auth-query';

export const mockUser: User = {id: 1, email: 'test@mail.com', username: 'test'};
export const mockAuthResponse: AuthResponse = {user: mockUser};
export const mockGetUserResponse: GetUserResponse = mockUser;
