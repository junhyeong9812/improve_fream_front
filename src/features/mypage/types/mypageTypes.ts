export interface MypageData {
  id: string;
  name: string;
  email: string;
}

export interface AddressData {
  id: number; // 고유 식별자 추가
  name: string;
  phoneNumber: string;
  zonecode: string;
  roadAddress: string;
  detailAddress: string;
  isDefaultAddress: boolean;
}

// 컴포넌트 정의
export interface AddAddressModalProps {
  onClose: () => void;
  onSubmit: (data: AddressData) => void;
  initialData?: AddressData | null;
}

export interface AddCardModalProps {
  isOpened: boolean;
  onClose: () => void;
}
